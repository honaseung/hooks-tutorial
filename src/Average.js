import { useCallback, useMemo, useRef, useState } from "react";

const getAvgerage = (numbers) => {
  if (numbers.length === 0) {
    return 0;
  }
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const inputEl = useRef(null);

  const onChangeIpb = useCallback((e) => {
    setNumber(e.target.value);
  }, []);

  const onInsert = useCallback(
    (e) => {
      const nextList = list.concat(parseInt(number));
      setList(nextList);
      setNumber("");
      inputEl.current.focus();
    },
    [number, list]
  );

  const avg = useMemo(() => getAvgerage(list), [list]);

  return (
    <>
      <input
        type="text"
        name="number"
        value={number}
        onChange={onChangeIpb}
        ref={inputEl}
      />
      <button onClick={onInsert}>추가</button>
      <ul>
        {list.map((el, idx) => (
          <li key={idx}>{el}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b>
        {avg}
      </div>
    </>
  );
};

export default Average;
