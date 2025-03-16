"use client";

import { useRouter, useSearchParams } from "next/navigation";
import MarketingBudgetsCase from "./MarketingBudgetsCase";
import MarketingFunnelCase from "./MarketingFunnelCase";

export default function CaseStudyPage() {
  const searchParams = useSearchParams();
  const caseType = searchParams.get("case");

  if (caseType === "marketing-budgets") {
    return <MarketingBudgetsCase />;
  }

  if (caseType === "marketing-funnel") {
    return <MarketingFunnelCase />;
  }

  return null;
}
