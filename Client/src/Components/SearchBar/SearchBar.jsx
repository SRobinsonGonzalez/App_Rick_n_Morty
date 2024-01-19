import { AutoComplete, Button, InputNumber, Tooltip, notification } from 'antd';
import { GiCardRandom } from 'react-icons/gi';
import React, { useState } from 'react';
import style from './SearchBar.module.css'
import { SearchOutlined } from '@ant-design/icons';


const SearchBar = ({ onSearch, onSearchName, randomHandler }) => {
  const [value, setValue] = useState('')
  const [id, setId] = useState('');

  const onChange = (value) => {
    setValue(value);
  };

  const handleChange = (value) => {
    setId(value);
  };

  const handleSearchClick = () => {
    if (value) {
      onSearchName(value);
    } else if (id) {
      onSearch(id);
    } else if (!value && !id) {
      return notification.error({
        message: 'Please',
        description: 'I need a name or ID',
        placement: 'topLeft'
      });
    };
  };

  return (
    <div className={style.SearchBarHeader}>
      <div className={style.searchBox}>
        <AutoComplete
          // options={names}
          onChange={onChange}
          placeholder='Search'
          style={{
            width: '80%',
            paddingRight: '.5em',
            marginLeft: '1em'
          }}
        />

        <InputNumber
          placeholder='id'
          min={1}
          max={826}
          onChange={handleChange}
          style={{
            width: '15%',
            marginRight: '1em'
          }}
          type='number'
        />
      </div>
      <Tooltip title="Search">
        <Button
          icon={<SearchOutlined />}
          onClick={handleSearchClick}
          shape="circle"
          size='large'
          style={{ background: '#001529', color: 'white', marginLeft: 5, marginRight: 2.5 }}
        />
      </Tooltip>
      <Tooltip title="Random Character">
        <Button
          icon={<GiCardRandom className={style.GiCardRandom} size={26} />}
          onClick={randomHandler}
          shape="circle"
          size='large'
          style={{ background: '#001529', marginLeft: 5 }}
          type="primary"
        />
      </Tooltip>
    </div>
  );
};

export default SearchBar;
{/* <div className={style.search}>
      <input
        className={style.inputCharacters}
        type='search'
        aria-activedescendant="both"
        aria-expanded='false'
        onChange={handleChange} value={id}
        placeholder="Search Character"
        name="search"
      />
  </div>
  <div className={style.add}>
      <button
        className={style.addButton}
        onClick={() => { onSearch(id); setId('') }}
      ><BiSearchAlt size="2rem" /></button>
  </div>
  <style>
      @import url('https://fonts.googleapis.com/css2?family=Blinker:wght@100&display=swap');
   </style> */}