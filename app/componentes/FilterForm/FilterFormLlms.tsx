import { Checkbox, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { useFetch } from "~/hooks";
import type { FilterFormLlmsProps, LLM } from "~/interfaces";

export const FilterFormLlms = ({ handleInputChange }: FilterFormLlmsProps) => {
  const { data, isLoading } = useFetch("https://localhost:7035/Llm/dto");

  const llms = data;
  return (
    <div className="form-group flex flex-col gap-2">
      <label>LLM</label>
      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        <RadioGroup name="llms" className="llmsFilter">
          <FormControlLabel
            key={0}
            control={
              <Radio
                name={`idLlm`}
                sx={{ color: "white" }}
                value={""}
                onChange={handleInputChange}
              />
            }
            label={`Ninguno`}
          />
          {llms.map((llm: LLM) => {
            return (
              <FormControlLabel
                key={llm.id}
                control={
                  <Radio
                    name={`idLlm`}
                    sx={{ color: "white" }}
                    value={llm.id}
                    onChange={handleInputChange}
                  />
                }
                label={`${llm.nombre} ${llm.version}`}
              />
            );
          })}
        </RadioGroup>
      )}
    </div>
  );
};
