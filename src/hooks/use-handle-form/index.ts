// Modules
import { useState } from 'react';

// Types
import { OnChangeEvent, UseHandleForm } from './types';

export default function useHandleForm (initialState:any):UseHandleForm {
  
  const [ form, setForm ] = useState(initialState);

  function handleOnChange (e:OnChangeEvent) {
    const { value, name } = e.target;
    if (value.length >= 100) return;
    setForm({ ...form, [name]:value });
  }

  function handleOnChangeCheck (e:OnChangeEvent) {
    const { name, checked } = e.target;
    setForm({ ...form, [name]:checked });
  } 

  function handleOnChangeJustNumbers (e:OnChangeEvent) {
    const { value, name } = e.target;
    if (!value) { setForm({ ...form, [name]:value }); return; }
    if (value.length >= 100) return;
    const lastChar = value.slice(-1);
    if (validateIsNumber(lastChar)) return;
    setForm({ ...form, [name]:value });
  }

  function handleOnChangeMaxLengthJustNumbers (e:OnChangeEvent, maxLength:number) {
    const { value, name } = e.target;
    const lastChar = value.slice(-1);
    if (value.length === maxLength + 1) return;
    if (validateIsNumber(lastChar)) return;
    setForm({ ...form, [name]:value });
  }

  function validateIsNumber (lastChar:string) {
    return (
      lastChar !== '1' && 
      lastChar !== '2' && 
      lastChar !== '3' && 
      lastChar !== '4' && 
      lastChar !== '5' &&
      lastChar !== '6' && 
      lastChar !== '7' &&
      lastChar !== '8' && 
      lastChar !== '9' &&
      lastChar !== '0' &&
      lastChar !== ''
    ) 
  }

  const cleanForm = () => setForm(initialState);

  return {
    form,
    initialState,
    setForm,
    handleOnChange,
    handleOnChangeCheck,
    handleOnChangeJustNumbers,
    handleOnChangeMaxLengthJustNumbers,
    cleanForm,
  }

}
