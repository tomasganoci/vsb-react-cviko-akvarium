import React, { useEffect, useState } from "react";
import { handleAddFish } from "../../handlers/fishHandlers";
import FishNameInput from "./FishNameInput";
import FishSizeRadios from "./FishSizeRadios";
import FishSubmitButton from "./FishSubmitButton";
import Form from "../../layout/Form";

function FishForm({ list, setList }) {
  const [valid, setValid] = useState(false);
  const [newFish, setNewFish] = useState({
    name: "",
    size: "",
  });

  useEffect(() => {
    setValid(newFish.name.trim() !== "" && newFish.size !== "");
  }, [newFish]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updated = { ...newFish, [name]: value };
    setNewFish(updated);
  };

  const resetNewFish = () => {
    setNewFish({
      name: "",
      size: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddFish(newFish, list, setList);
    resetNewFish();
  };

  return (
    <Form legend={"Přidat rybičku"} onSubmit={handleSubmit}>
      <FishNameInput value={newFish.name} onChange={handleChange} title="Jméno" id="name"/>
      {/* Radio Buttons */}
      <FishSizeRadios value={newFish.size} onChange={handleChange} />
      {/* //Radio Buttons */}
      <FishSubmitButton isValid={valid} color="success">Přidat</FishSubmitButton>
    </Form>
  );
}

export default FishForm;
