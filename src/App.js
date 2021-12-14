import SearchButton from './SearchButton.js';
import SearchInput from './SearchInput.js';
import { useRef } from 'react'

export default function Page() {
  const myRef = useRef(null)
  return (
    <>
      <nav>
        <SearchButton ref={myRef} />
      </nav>
      <SearchInput ref={myRef} />
    </>
  );
}
