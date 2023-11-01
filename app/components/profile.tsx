"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useAccount, useConnect, useDisconnect, useNetwork } from "wagmi";

export default function Profile() {
  const [mounted, setMounted] = useState(false);
  const { chain, chains } = useNetwork();

  const { address, isConnected } = useAccount();
  const { connect } = useConnect();
  const { disconnect } = useDisconnect();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (isConnected)
    return (
      <>
        <div className="text-white">
          <span>
            Connected to {address!!} {chain?.name} &nbsp;
          </span>
          <Button className="bg-primary" onClick={() => disconnect()}>
            Disconnect
          </Button>
        </div>
      </>
    );
  return (
    <>
      <div className="text-white">
        <Button onClick={() => connect()}>Connect Wallet</Button>
      </div>
    </>
  );
}
