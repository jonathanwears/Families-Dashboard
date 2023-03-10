import { FormControl, SelectChangeEvent } from '@mui/material';
import { useDidMount, useDidUpdate } from 'rooks';
import { useState } from 'react';
import QuickDropDown from '../../components/quickPanel/QuickDropDown';
import { createAvailKeysList, createTypes, createNameList } from '../../utils/createData';
import Title from '../../ui/Title';
import Button from '../../ui/Button';

function QuickPanel() {
  const typeCatagoriesArr = ['Inventory', 'Tasks']
  const [isMountReady, setIsMountReady] = useState(false)

  //controlled inputs value
  const [typeValue, setTypeValue] = useState<string>(typeCatagoriesArr[0]);
  const [personValue, setPersonValue] = useState<string>('');
  const [personInfoValue, setPersonInfoValue] = useState<string>('');

  //fetched arrays data
  const [allData, setAllData] = useState<any[]>([])
  const [perDataArr, setPerDataArr] = useState<string[]>([])
  const [personDropdownArr, setPersonDropdownArr] = useState<string[]>([])

  useDidMount(() => {
    async function initialState() {
      const availTypes = await createTypes(typeValue);
      setAllData(availTypes);

      const fakeNamesValues = createNameList(availTypes);
      setPersonDropdownArr(fakeNamesValues);

      const availKeys = createAvailKeysList(personValue, availTypes);
      setPerDataArr(availKeys);

      setIsMountReady(true);
    }
    initialState()
  })

  useDidUpdate(() => {
    setIsMountReady(false);
    async function newState() {
      resetStates()
      const availTypes = await createTypes(typeValue);
      setAllData(availTypes);

      const fakeNamesValues = createNameList(allData);
      setPersonDropdownArr(fakeNamesValues);

      const availKeys = createAvailKeysList(personValue, allData);
      setPerDataArr(availKeys);

      setIsMountReady(true);
    }
    newState()
  }, [typeValue])

  function resetStates() {
    setPersonValue('');
    setPersonInfoValue('');
  }

  return (
    <div className="flex flex-col w-full h-full">
      <Title>Quick Actions</Title>
      <div className='border-2 border-purple-100 mt-2' />
      <form className='container pt-2 px-2 h-full w-full flex flex-row items-center'>
        <QuickDropDown
          value={typeValue}
          handleOnChange={(event: SelectChangeEvent) => { setTypeValue(event.target.value) }}
          labelId='type-label'
          label='Type'
          menuItems={typeCatagoriesArr}
        />
        {isMountReady && <>
          <QuickDropDown
            value={personValue}
            handleOnChange={(event: SelectChangeEvent) => { setPersonValue(event.target.value) }}
            labelId='person-label'
            label='Person'
            menuItems={personDropdownArr}
          />
          <QuickDropDown
            value={personInfoValue}
            handleOnChange={(event: SelectChangeEvent) => { setPersonInfoValue(event.target.value) }}
            labelId='Person-Info-label'
            label='Person Info'
            menuItems={perDataArr}
          />
          <div className='w-full mt-0 px-3 mb-6 md:mb-0 container rounded-lg my-6 py-2 '>
            <label
              className='block uppercase tracking-wide text-xs dark:text-slate-400 font-bold mb-2'
              htmlFor='new-value'
            >
              New Value
            </label>
            <input placeholder='New Value' className='appearance-none block bg-gray-100  dark:text-slate-100 dark:focus:bg-slate-900 dark:bg-gray-700 text-gray-700  border border-purple-500  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:ring-purple-500 focus:border-purple-500 w-full p-2.5 d' />
          </div>
          <div className='pt-2'>
            <Button title='Submit' onClick={() => console.log('hello')} />
          </div>
        </>
        }
      </form>
    </div>
  )
}

export default QuickPanel;
