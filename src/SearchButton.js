import { forwardRef, useRef} from 'react'

const SearchButton = forwardRef((props, ref) => {
  return <button onClick={()=>{ref.current.focus()}} ref={ref}>Search</button>;
});

export default SearchButton

