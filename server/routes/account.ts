import { RequestHandler } from "express";
import { AccountResponse } from "@shared/api";

export const handleAccount: RequestHandler = (req, res) => {
  const phone = (req.query.phone as string) || "";
  const plan = (req.query.plan as string) || "basic";

  if (!phone) {
    res.status(400).json({ message: "Phone number is required" });
    return;
  }

  const response: AccountResponse = {
    phone,
    plan,
    isPremium: plan === "premium",
    planLabel: plan === "premium" ? "Monthly Plan — ₹179/mo" : "Weekly Plan — ₹79/week",
  };

  res.status(200).json(response);
};
