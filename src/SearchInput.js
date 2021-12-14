import { forwardRef, useRef } from 'react';

const SearchInput = forwardRef((props, ref) => {
  return <input {...props} ref={ref} />;
});

export default SearchInput
