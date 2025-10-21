'use client';

import { useState } from 'react';
import { ShieldCheck, UserCheck, CreditCard, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { EligibilityChecker } from '@/components/buy/eligibility-checker';
import Link from 'next/link';
import { cn } from '@/lib/utils';

type Step = 'eligibility' | 'verification' | 'payment';

export default function BuyPage() {
  const [isEligible, setIsEligible] = useState(false);
  const [isHumanVerified, setIsHumanVerified] = useState(false);
  const [currentStep, setCurrentStep] = useState<Step>('eligibility');

  const handleEligibilitySuccess = () => {
    setIsEligible(true);
    setCurrentStep('verification');
  };

  const handleVerification = () => {
    // Placeholder for World ID logic
    setIsHumanVerified(true);
    setCurrentStep('payment');
    alert('Human verification successful (Simulated).');
  };

  const handlePayment = (method: string) => {
     // Placeholder for payment logic
     alert(`Payment initiated with ${method} (Simulated). After payment, email proof to liveforever@buythecurefordeath.world for GTPS transfer.`);
  }

  const getStepClass = (step: Step) => {
    if (currentStep === step) return "opacity-100";
    if (
      (step === 'verification' && currentStep === 'payment') ||
      (step === 'eligibility' && (currentStep === 'verification' || currentStep === 'payment'))
    ) {
      return "opacity-100";
    }
    return "opacity-50";
  };

  return (
    <div className="container mx-auto max-w-2xl px-4 py-12 md:px-6 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter">Purchase GTPS Tokens</h1>
        <p className="mt-4 text-lg text-muted-foreground">Join the future of humanity. 500 GTPS for $20.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>3-Step Purchase Process</CardTitle>
          <CardDescription>Complete the steps below to acquire your GTPS tokens.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Step 1: Eligibility */}
          <div className={cn("transition-opacity", getStepClass('eligibility'))}>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-headline">Step 1: Eligibility Check</h3>
                <p className="text-muted-foreground">Confirm you meet the participation criteria.</p>
              </div>
            </div>
            <EligibilityChecker onEligibilityCheck={handleEligibilitySuccess} />
          </div>

          <Separator />

          {/* Step 2: Verification */}
          <div className={cn("transition-opacity", getStepClass('verification'))}>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <UserCheck className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-headline">Step 2: Human Verification</h3>
                <p className="text-muted-foreground">Verify you are human with World ID to ensure fair access.</p>
              </div>
            </div>
             <Button
                onClick={handleVerification}
                disabled={!isEligible || isHumanVerified}
                className="w-full md:w-auto bg-accent text-accent-foreground hover:bg-accent/90"
             >
                {isHumanVerified ? "Verified" : "Verify with World ID"}
             </Button>
             <p className="text-xs text-muted-foreground mt-2">This is a simulated action for demo purposes.</p>
          </div>
          
          <Separator />

          {/* Step 3: Payment */}
          <div className={cn("transition-opacity", getStepClass('payment'))}>
             <div className="flex items-center gap-4 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <CreditCard className="h-6 w-6" />
                </div>
                <div>
                    <h3 className="text-xl font-headline">Step 3: Payment</h3>
                    <p className="text-muted-foreground">Choose your preferred payment method.</p>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={() => handlePayment('USDC')} disabled={!isHumanVerified} className="flex-1">Pay $20 USDC</Button>
                <Button asChild variant="outline" disabled={!isHumanVerified} className="flex-1">
                    <Link href="https://paypal.me/davidgomadza" target="_blank">
                        Pay with PayPal <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2">USDC payment is simulated. After payment, please email proof to liveforever@buythecurefordeath.world.</p>
          </div>
        </CardContent>
        <CardFooter>
            <p className="text-xs text-muted-foreground">By purchasing, you confirm you're not a millionaire/billionaire and agree to the terms of service.</p>
        </CardFooter>
      </Card>
    </div>
  );
}
