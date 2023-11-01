"use client";

import { useAccount, useBalance } from "wagmi";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export const BalanceComponent = () => {
  const [mounted, setMounted] = useState(false);

  const { address } = useAccount();

  const { data, error, isSuccess, isError, isLoading } = useBalance({
    address,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleGiveAllowance = () => {};

  return (
    <>
      {" "}
      {mounted && (
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {isSuccess && data && (
            <p className="px-4 text-center text-sm text-muted-foreground break-words">
              Balance: {data.formatted} {data.symbol}
            </p>
          )}

          {isLoading && <div>Fetching balance…</div>}

          {isError && (
            <p className="px-4 text-center text-sm text-muted-foreground break-words">
              {error?.message}
            </p>
          )}

          <div className="p-2 w-full">
            <Button
              disabled={isLoading}
              onClick={() => handleGiveAllowance()}
              className="w-full bg-primary"
            >
              {isLoading ? "Check Wallet" : "Give Allowance"}
            </Button>
          </div>
        </div>
      )}
    </>
  );
};
