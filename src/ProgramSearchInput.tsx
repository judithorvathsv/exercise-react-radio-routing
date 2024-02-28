import { IProgramSearchInputProps } from "./interfaces";

const ProgramSearchInput = ({ handleSearchedProgram }: IProgramSearchInputProps) => {
  function getSearchedProgram(serachedName: string) {
    handleSearchedProgram(serachedName);
  }

  return (
    <div id='inputDiv'>
      <label id='programInputLabel' htmlFor="programInputField">Search by program name</label>
      <input id="programInputField" type="text" onChange={(e) => getSearchedProgram(e.currentTarget.value)} />
    </div>
  );
};

export default ProgramSearchInput;
