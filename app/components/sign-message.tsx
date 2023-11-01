"use client";

import { useEffect, useRef, useState } from "react";
import { useSignMessage } from "wagmi";
import { getWalletClient, getAccount } from "@wagmi/core";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const SignMessageComponent = () => {
  const [inputValue, setInputValue] = useState("");

  // const { data, error, isLoading, signMessage, variables } = useSignMessage();

  const { data, error, isError, isLoading, isSuccess, variables, signMessage } =
    useSignMessage({
      message: inputValue,
      onError(error) {
        console.log("Error", error);
      },
    });

  const handleSignMessage = () => {
    console.log("inputValue", inputValue);
    signMessage({ message: inputValue });
  };

  const handleChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const getWalletClientInfo = async () => {
    console.log("Get Wallet Client Info");

    console.log({
      getAccount: getAccount(),
    });
    const walletClient = getWalletClient();
    //const [account] = await walletClient.getAddresses();

    console.log({
      walletClient,
    });
  };

  useEffect(() => {
    getWalletClientInfo();
  }, []);

  return (
    <>
      <div className="py-10 flex flex-col gap-y-4">
        <Input
          type="text"
          placeholder="Message to sign"
          value={inputValue}
          onChange={handleChange}
        />

        <Button
          disabled={isLoading}
          onClick={handleSignMessage}
          className="bg-primary"
        >
          {isLoading ? "Check Wallet" : "Sign Message"}
        </Button>

        {data && (
          <p className="px-4 text-center text-sm text-muted-foreground break-words">
            Signature: {data}
          </p>
        )}

        {error && (
          <p className="px-4 text-center text-sm text-muted-foreground break-words">
            {error.message}
          </p>
        )}
      </div>
    </>
  );
};
