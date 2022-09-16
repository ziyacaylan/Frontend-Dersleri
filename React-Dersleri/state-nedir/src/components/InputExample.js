import { useState } from "react";

function InputExample() {
  const [form, setForm] = useState({ name: "", surname: "" });

  const onChangeInput = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
      [event.target.surname]: event.target.value,
    });
  };
  return (
    <div>
      <br />
      <br />
      Please enter your name
      <br />
      <input name="name" value={form.name} onChange={onChangeInput} />
      <br />
      Please enter your surname
      <br />
      <input name="surname" value={form.surname} onChange={onChangeInput} />
      <br />
      <br />
      <br />
      {form.name} {form.surname}
    </div>
  );
}

export default InputExample;
