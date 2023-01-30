import { FormControl, SelectChangeEvent } from '@mui/material';
import { useDidMount, useDidUpdate } from 'rooks';
import { useState } from 'react';
import QuickDropDown from '../../components/quickPanel/QuickDropDown';
import CreateNewListItem from '../../components/tables/CreateNewListItem';
import QuickPanelChangeInput from './QuickPanelChangeInput';
import { createAvailKeysList, createTypes, createNameList } from '../../utils/createData';

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
    <div className="container m-1 rounded-xl mx-auto bg-purple-100 border border-purple-200 flex justify-center items-center md:flex md:flex-col">
      <FormControl variant="standard" sx={{ m: 1, minWidth: 200, display: 'flex', flexDirection: { lg: 'row', md: 'column' }, width: { md: '300' } }}>
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
            labelId='persob-label'
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
          <CreateNewListItem
            formFields={QuickPanelChangeInput}
            setState={() => {/*final submit to db */ }}
          />
        </>
        }
      </FormControl>
    </div >
  )
}

export default QuickPanel;
