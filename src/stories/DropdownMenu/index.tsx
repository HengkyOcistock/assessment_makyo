import { useEffect, useState } from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PropTypes from 'prop-types';
import { options } from './options';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { getHighlightedText } from '../../helpers/getHighlightedText';

export interface DropdownMenuProps {
  /**
   * Is this using the search feature or not?
   */
  withSearch?: boolean;
  /**
   * the the field with outline or not?
   */
  outlined?: boolean;
  /**
   * enable multiple or single select
   */
  multiple?: boolean;
  /**
   * list of the dropdown menu
   */
  options?: string[];
}

export const DropdownMenu = ({
  withSearch = false,
  outlined = false,
  multiple = true,
}: DropdownMenuProps) => {
  const [selectedOption, setSelectedOption] = useState<string[]>([])
  const [showDropdown, setShowDropdown] = useState(true)
  const [keyword, setKeyword] = useState('')

  // handle click outside of dropdown component
  const filterRef = useOutsideClick(() => {
    setShowDropdown(false)
  });

  useEffect(() => {
    const searchKeyword = keyword.trim()
    if (searchKeyword !== '') {
      options.map((opt) => {
        const parts = opt.split(new RegExp(`(${searchKeyword})`, 'gi'));
        return <span>{parts.map(part => part.toLowerCase() === searchKeyword.toLowerCase() ? <b>{part}</b> : part)}</span>
      })
    }
  }, [keyword])

  const handleSelect = (value: string) => {
    if (multiple) {
      setSelectedOption(prev => [...prev, value])
    } else {
      setSelectedOption([value])
    }
  }

  return (
    <div className='max-w-6xl mx-auto flex items-center gap-5 p-5'> 
      <div className="text-gray-800">Label</div>
      <div ref={filterRef} className={`${outlined ? "" : "bg-gray-200"} w-full min-h-[34px] flex items-center gap-2 px-2 py-1 border rounded relative`} onClick={() => setShowDropdown(true)}>
        <KeyboardArrowDownIcon className='absolute right-2' />
        {multiple ?
          selectedOption?.map(opt => (
            <div key={opt} className="bg-blue-100 drop-shadow px-2 py-1 rounded-full text-xs text-gray-500 flex items-center gap-1">
              <span className=''>{opt}</span>
              <CancelOutlinedIcon fontSize='small' className='hover:text-gray-700' onClick={() => setSelectedOption(prev => prev.filter(i => i !== opt))} />
            </div>
          ))
          :
          !selectedOption.length ? null : (
            <div className="bg-blue-100 drop-shadow px-2 py-1 rounded-full text-xs text-gray-500 flex items-center gap-1">
              <span className=''>{selectedOption[0]}</span>
              <CancelOutlinedIcon fontSize={'small'} className='hover:text-gray-700' onClick={() => setSelectedOption([])} />
            </div>
          )
        }

        {!showDropdown ? null :
          <div className="absolute w-full bottom-0 left-0 transform translate-y-[105%] text-sm">
            {!withSearch ? null :
              <div className="w-full border rounded-t flex items-center gap-2 relative">
                <SearchOutlinedIcon fontSize='small' className='text-gray-400 ml-2 flex-shrink-0' />
                <input type="text" className="w-full focus:outline-none p-1" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
                {keyword.trim() === '' ? null :
                  <CancelOutlinedIcon fontSize='small' className='mx-1 text-gray-400 hover:text-gray-700' onClick={() => setKeyword('')} />
                }
              </div>
            }

            <div className="w-full border rounded-b">
              {options?.filter(i => !selectedOption.includes(i)).map((opt) => (
                <div key={opt} className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleSelect(opt)}>{getHighlightedText(opt, keyword)}</div>
              ))}
            </div>
          </div>
        }
      </div>
    </div>
  )
}

DropdownMenu.propTypes = {
  withSearch: PropTypes.bool,
  outlined: PropTypes.bool,
  options: PropTypes.array
};

DropdownMenu.defaultProps = {
  withSearch: true,
  outlined: true,
  options: options
};