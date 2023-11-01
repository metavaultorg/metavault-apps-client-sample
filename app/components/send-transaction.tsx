"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getPublicClient } from "@wagmi/core";
import { useState } from "react";
import { parseEther } from "viem";
import { useAccount, useSendTransaction } from "wagmi";

const EstimateGas = () => {
  const publicClient = getPublicClient();
  const { address } = useAccount();
  const [result, setResult] = useState("");

  const handleEstimateGas = async () => {
    const gasEstimate = await publicClient.estimateGas({
      account: address!!,
      to: "0xE6Cc594E87B9F9b5FfF89205835Ff98BA7A1f6bB",
      value: parseEther("1"),
    });

    setResult(gasEstimate.toString());
  };

  return (
    <>
      <Button
        onClick={() => handleEstimateGas()}
        className="w-full mt-5 bg-primary"
      >
        Estimate Gas
      </Button>

      {result && (
        <p className="px-4 text-center text-sm text-muted-foreground break-words">
          Result: {result.toString()}
        </p>
      )}
    </>
  );
};

const SendTxs = () => {
  const [inputValue, setInputValue] = useState(
    "0xE6Cc594E87B9F9b5FfF89205835Ff98BA7A1f6bB"
  );

  const { data, isLoading, error, isSuccess, sendTransaction } =
    useSendTransaction({
      to: inputValue,
      value: parseEther("1"),
    });

  return (
    <>
      <div className="py-10 flex flex-col gap-y-4">
        <Input
          type="text"
          placeholder="Address to send Ether"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />

        <Button
          disabled={isLoading}
          onClick={() => sendTransaction()}
          className="w-full bg-primary"
        >
          {isLoading ? "Check Wallet" : "Send Transaction"}
        </Button>
      </div>

      {isSuccess && data && (
        <p className="px-4 text-center text-sm text-muted-foreground break-words">
          Txn: {data.hash}
        </p>
      )}

      {error && (
        <p className="px-4 text-center text-sm text-muted-foreground break-words">
          {error.message}
        </p>
      )}

      {isLoading && <div>Check Wallet</div>}
    </>
  );
};

export const SendTxnComponent = () => {
  return (
    <>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="p-2 w-full">
          <SendTxs />
          <EstimateGas />
        </div>
      </div>
    </>
  );
};
