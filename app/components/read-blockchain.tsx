"use client";

import { useEffect, useState } from "react";
import { useAccount, useBlockNumber } from "wagmi";

import { getPublicClient } from "@wagmi/core";

const ReadBlockchainInfo = () => {
  const [mounted, setMounted] = useState(false);
  const { data } = useBlockNumber();
  const { address } = useAccount();
  const [nounce, setNounce] = useState(-1);

  const getNounce = async () => {
    const publicClient = getPublicClient();
    const transactionCount = await publicClient.getTransactionCount({
      address:
        (address as `0x${string}`) ||
        "0x43E0234F72551cb39fA0e6f73308Be3e021E52a3",
    });

    setNounce(transactionCount);
  };

  useEffect(() => {
    getNounce();
    setMounted(true);
  }, []);

  if (!mounted) return <></>;

  return (
    <>
      <p>&nbsp;</p>
      <p>Block Number: {data?.toLocaleString()}</p>

      {address && (
        <p>
          Nounce of {address!!}: {nounce}
        </p>
      )}
    </>
  );
};

export default ReadBlockchainInfo;
