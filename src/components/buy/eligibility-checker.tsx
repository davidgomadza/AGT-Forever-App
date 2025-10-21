"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { verifyEligibility, EligibilityOutput } from "@/ai/flows/eligibility-verification";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";

const formSchema = z.object({
  netWorth: z.string().min(1, "Please enter your estimated net worth."),
});

type EligibilityCheckerProps = {
  onEligibilityCheck: () => void;
};

export function EligibilityChecker({ onEligibilityCheck }: EligibilityCheckerProps) {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<EligibilityOutput | null>(null);
  const [isEligible, setIsEligible] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      netWorth: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    setResult(null);

    try {
      const response = await verifyEligibility(values);
      setResult(response);
      if (response.isEligible) {
        setIsEligible(true);
        onEligibilityCheck();
      } else {
        setIsEligible(false);
      }
    } catch (error) {
      console.error("Eligibility check failed:", error);
      setResult({
        isEligible: false,
        reason: "An error occurred during verification. Please try again.",
      });
      setIsEligible(false);
    } finally {
      setLoading(false);
    }
  }

  if (isEligible && result) {
    return (
      <Alert variant="default" className="bg-green-500/10 border-green-500/50 text-green-500">
        <CheckCircle2 className="h-4 w-4 !text-green-500" />
        <AlertTitle>Eligibility Confirmed</AlertTitle>
        <AlertDescription>{result.reason} You can proceed to the next step.</AlertDescription>
      </Alert>
    );
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="netWorth"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Self-Reported Net Worth (USD)</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., 50000" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={loading}>
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {loading ? "Verifying..." : "Check Eligibility"}
          </Button>
        </form>
      </Form>

      {result && !isEligible && (
        <Alert variant="destructive" className="mt-4">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Not Eligible</AlertTitle>
          <AlertDescription>{result.reason}</AlertDescription>
        </Alert>
      )}
    </div>
  );
}
