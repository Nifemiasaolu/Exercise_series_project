import { useState } from "react";
import BillInput from "./BillInput";
import Output from "./Output";
import Reset from "./Reset";
import ServiceInput from "./ServiceInput";

export default function CalculateTips() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = (bill * (percentage1 + percentage2)) / 2 / 100;

  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <ServiceInput percentage={percentage1} onSelect={setPercentage1}>
        How did you like the service?
      </ServiceInput>
      <ServiceInput percentage={percentage2} onSelect={setPercentage2}>
        How did your friend like the service?
      </ServiceInput>

      {bill > 0 && (
        <>
          <Output tip={tip} bill={bill} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}
