import React, { useEffect, useState } from "react";
import Form from "../layout/Form";
import PageRow from "../layout/PageRow";
import FishNameInput from "../components/form/FishNameInput";
import FishSubmitButton from "../components/form/FishSubmitButton";
import validatePositiveInt from "../function/validatePositiveInt";

function TankPage({ list }) {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [depth, setDepth] = useState("");

  const [smallCount, setSmallCount] = useState(0);
  const [bigCount, setBigCount] = useState(0);

  const [litreInTank, setLitreInTank] = useState(0);
  const [requiredLitre, setRequiredLitre] = useState(0);

  const [valid, setValid] = useState(false);

  useEffect(() => {
    const small = list.filter((fish) => fish.size === "malá").length;
    const big = list.filter((fish) => fish.size === "velká").length;

    setSmallCount(small);
    setBigCount(big);
  }, [list]);

  useEffect(() => {
    const litre = (width * height * depth) / 1000;
    const required = smallCount * 10 + bigCount * 20;

    setLitreInTank(litre);
    setRequiredLitre(required);
    setValid(litre >= required);
  }, [width, depth, height, smallCount, bigCount]);

  const handlers = {
    width: setWidth,
    height: setHeight,
    depth: setDepth,
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    const number = parseFloat(value);

    if (handlers[id] && validatePositiveInt(value)) {
      handlers[id](number);
    }
  };

  const sizeTank = [
    { id: "width", title: "Šířka", value: width },
    { id: "height", title: "Výška", value: height },
    { id: "depth", title: "Hloubka", value: depth },
  ];

  const onSubmit = (e) => {
    e.preventDefault();
    window.alert("Odeslal jsem zakázku do výroby");
  };

  return (
    <div className="row justify-content-center">
      <div className="col-lg-6">
        <main>
          <PageRow>
            <Form legend="Plánovač rozměrů (cm)" onSubmit={onSubmit}>
              <div className="row">
                {sizeTank.map(({ id, title, value }) => (
                  <div className="col-sm-4" key={id}>
                    <FishNameInput
                      type="number"
                      id={id}
                      title={title}
                      value={value}
                      onChange={handleChange}
                    />
                  </div>
                ))}
              </div>
              <div className="row justify-content-center">
                <div className="col-sm-6">
                  <FishNameInput
                  type="number"
                    title="Množství vody v akváriu"
                    value={Math.round(litreInTank)}
                    disabled
                  />
                </div>
              </div>
              <hr className="border border-primary border-3" />
              <div className="row">
                <div className="col-sm-6">
                  <FishNameInput
                    title="Počet malých ryb (10 l)"
                    value={smallCount}
                    disabled
                  />
                </div>
                <div className="col-sm-6">
                  <FishNameInput
                    title="Počet velkých ryb (20 l)"
                    value={bigCount}
                    disabled
                  />
                </div>
              </div>
              <div className="row">
                {" "}
                <div className="col">
                  <FishNameInput
                    title="Potřebné množstí vody"
                    value={requiredLitre}
                    disabled
                  />
                </div>
              </div>
              <FishSubmitButton
                isValid={valid}
                color={valid ? "success" : "danger"}
              >
                Schválit rozměry
              </FishSubmitButton>
            </Form>
          </PageRow>
        </main>
      </div>
    </div>
  );
}
export default TankPage;
