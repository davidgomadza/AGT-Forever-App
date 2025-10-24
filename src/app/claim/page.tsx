'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { UserCheck, Diamond, Clipboard, ClipboardCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { cn } from '@/lib/utils';

const formSchema = z.object({
  balance: z.coerce.number().min(0, 'Balance must be a positive number.'),
});

type Step = 'verification' | 'balance_check' | 'claim';

export default function ClaimPage() {
  const [isHumanVerified, setIsHumanVerified] = useState(false);
  const [hasEnoughBalance, setHasEnoughBalance] = useState(false);
  const [claimCode, setClaimCode] = useState('');
  const [copied, setCopied] = useState(false);
  const [currentStep, setCurrentStep] = useState<Step>('verification');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const handleVerification = () => {
    setIsHumanVerified(true);
    setCurrentStep('balance_check');
    const app_id = process.env.NEXT_PUBLIC_WLD_APP_ID as `app_${string}`;
const action = process.env.NEXT_PUBLIC_WLD_ACTION as string;

export async function verify(
  proof: IVerifyRequest["proof"],
  signal?: string
): Promise<VerifyReply> {
  const verifyRes = await verifyCloudProof(proof, app_id, action, signal);
  if (verifyRes.success) {
    return { success: true };
  } else {
    return { success: false, code: verifyRes.code, attribute: verifyRes.attribute, detail: verifyRes.detail };
  }
}
  const generateClaimCode = () => {
    return `AGT-CLAIM-${Date.now()}`;
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (values.balance >= 500) {
      setHasEnoughBalance(true);
      const code = generateClaimCode();
      setClaimCode(code);
      setCurrentStep('claim');
    } else {
      setHasEnoughBalance(false);
      form.setError('balance', { type: 'manual', message: 'You need at least 500 GTPS to claim.' });
    }
  }
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(claimCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  const getStepClass = (step: Step) => {
    if (currentStep === step) return "opacity-100";
    if (
        (step === 'balance_check' && currentStep === 'claim') ||
        (step === 'verification' && (currentStep === 'balance_check' || currentStep === 'claim'))
      ) return "opacity-100";
    return "opacity-50";
  };

  return (
    <div className="container mx-auto max-w-2xl px-4 py-12 md:px-6 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter">Claim Your 8000 AGT</h1>
        <p className="mt-4 text-lg text-muted-foreground">Follow the steps to claim your life-extension treatment rights.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Claim Process</CardTitle>
          <CardDescription>Verify your humanity and token balance to receive your claim code.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Step 1: Verification */}
          <div className={cn("transition-opacity", getStepClass('verification'))}>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <UserCheck className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-headline">Step 1: Human Verification</h3>
            </div>
            <Button
              onClick={handleVerification}
              disabled={isHumanVerified}
              className="w-full md:w-auto bg-accent text-accent-foreground hover:bg-accent/90"
            >
              {isHumanVerified ? 'Verified' : 'Verify with World ID'}
            </Button>
            <p className="text-xs text-muted-foreground mt-2">This is a simulated action.</p>
          </div>

          <Separator />

          {/* Step 2: Balance Check */}
          <div className={cn("transition-opacity", getStepClass('balance_check'))}>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Diamond className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-headline">Step 2: Check GTPS Balance</h3>
            </div>
            {hasEnoughBalance ? (
                <Alert variant="default" className="bg-green-500/10 border-green-500/50 text-green-500">
                    <CheckCircle2 className="h-4 w-4 !text-green-500" />
                    <AlertTitle>Balance Confirmed</AlertTitle>
                    <AlertDescription>You have enough GTPS to proceed.</AlertDescription>
                </Alert>
            ) : (
                <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                    control={form.control}
                    name="balance"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Your GTPS Token Balance</FormLabel>
                        <FormControl>
                            <Input type="number" placeholder="e.g., 600" {...field} disabled={!isHumanVerified} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <Button type="submit" disabled={!isHumanVerified}>Check Balance</Button>
                </form>
                </Form>
            )}
          </div>
          
          <Separator />
          
          {/* Step 3: Claim */}
          <div className={cn("transition-opacity", getStepClass('claim'))}>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Diamond className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-headline">Step 3: Claim Instructions</h3>
              </div>
              {hasEnoughBalance ? (
                 <div className="space-y-4">
                    <p>Congratulations! You are eligible to claim your AGT.</p>
                    <Alert>
                        <AlertTitle>Your Unique Claim Code</AlertTitle>
                        <AlertDescription className="flex items-center justify-between mt-2">
                            <code className="text-lg font-mono text-accent">{claimCode}</code>
                             <Button variant="ghost" size="icon" onClick={copyToClipboard}>
                                {copied ? <ClipboardCheck className="h-5 w-5 text-green-500"/> : <Clipboard className="h-5 w-5"/>}
                             </Button>
                        </AlertDescription>
                    </Alert>
                    <p>To finalize your claim, please email the following to <strong className="text-accent">liveforever@buythecurefordeath.world</strong>:</p>
                    <ul className="list-disc list-inside bg-card p-4 rounded-md">
                        <li>Your unique claim code above.</li>
                        <li>A screenshot of your wallet showing the GTPS balance.</li>
                    </ul>
                 </div>
              ) : (
                <p className="text-muted-foreground">Complete the previous steps to see claim instructions.</p>
              )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
