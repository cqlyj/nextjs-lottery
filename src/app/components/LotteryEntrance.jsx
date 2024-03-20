import React, { useEffect, useState } from "react";
import { useWeb3Contract, useMoralis } from "react-moralis";
import { abi, contractAddresses } from "../constants/index";

const LotteryEntrance = () => {
  const { chainId: chainIdHex, isWeb3Enabled } = useMoralis();
  const chainId = parseInt(chainIdHex);
  const raffleAddress =
    chainId in contractAddresses ? contractAddresses[chainId][0] : null;

  const [entranceFee, setEntranceFee] = useState("0");

  const { runContractFunction: enterRaffle } = useWeb3Contract({
    abi: abi,
    contractAddress: raffleAddress,
    functionName: "enterRaffle",
    params: {},
    msgValue: parseInt(entranceFee),
  });

  const { runContractFunction: getEntranceFee } = useWeb3Contract({
    abi: abi,
    contractAddress: raffleAddress,
    functionName: "getEntranceFee",
    params: {},
  });

  useEffect(() => {
    if (isWeb3Enabled) {
      async function updateUI() {
        const entranceFeeFromCall = (await getEntranceFee()).toString();
        setEntranceFee(entranceFeeFromCall / 1e18);
      }
      updateUI();
    }
  }, [isWeb3Enabled]);

  return (
    <div>
      hello from enterRaffle!
      {raffleAddress ? (
        <>
          <button
            onClick={async () => {
              await enterRaffle();
            }}
          >
            Enter Raffle
          </button>
          <div>{`Entrance Fee: ${entranceFee} ETH`}</div>
        </>
      ) : (
        <div>Connect to a supported network</div>
      )}
    </div>
  );
};

export default LotteryEntrance;
