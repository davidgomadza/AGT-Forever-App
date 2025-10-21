'use server';

/**
 * @fileOverview Implements an AI-powered eligibility verification flow.
 *
 * - verifyEligibility - A function that verifies user eligibility based on self-reported information.
 * - EligibilityInput - The input type for the verifyEligibility function.
 * - EligibilityOutput - The return type for the verifyEligibility function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EligibilityInputSchema = z.object({
  netWorth: z
    .string()
    .describe("The user's self-reported net worth.  Must be a string representation of a number."),
});
export type EligibilityInput = z.infer<typeof EligibilityInputSchema>;

const EligibilityOutputSchema = z.object({
  isEligible: z
    .boolean()
    .describe(
      'Whether the user is eligible to participate based on their net worth.'
    ),
  reason: z
    .string()
    .describe('The reason for the eligibility determination.'),
});
export type EligibilityOutput = z.infer<typeof EligibilityOutputSchema>;

export async function verifyEligibility(
  input: EligibilityInput
): Promise<EligibilityOutput> {
  return eligibilityVerificationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'eligibilityVerificationPrompt',
  input: {schema: EligibilityInputSchema},
  output: {schema: EligibilityOutputSchema},
  prompt: `You are an AI assistant that helps determine if a user is eligible to participate in an event.

  The participating condition is that the user's net worth must be less than one million USD.

  Given the following information about the user, determine if they are eligible to participate.

  Net Worth: {{{netWorth}}}

  Respond in JSON format.

  Include a field \"isEligible\" that is true if the user is eligible and false otherwise.
  Include a field \"reason\" that explains why the user is eligible or not. Make sure the reason is short and concise.
  `,
});

const eligibilityVerificationFlow = ai.defineFlow(
  {
    name: 'eligibilityVerificationFlow',
    inputSchema: EligibilityInputSchema,
    outputSchema: EligibilityOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
