// import { useReducer } from "react";
import useInputs from "./useInputs";

// function reducer(state, action) {
//   return { ...state, [action.name]: action.value };
// }

const Info = () => {
  // const [name, setName] = useState("");
  // const [nickname, setNickname] = useState("");

  // const [state, dispatch] = useReducer(reducer, { name: "", nickname: "" });
  const [state, onChange] = useInputs({ name: "", nickname: "" });
  const { name, nickname } = state;

  //   useEffect(() => {
  //     console.log("useEffect", "mount", "update");
  //     console.log({ name, nickname });
  //   });

  //   useEffect(() => {
  //     console.log("useEffect", "mount");
  //     console.log({ name, nickname });
  //   }, []);

  //   useEffect(() => {
  //     console.log("useEffect", "nameUpdate");
  //     console.log({ name, nickname });
  //   }, [name]);

  //   useEffect(() => {
  //     console.log("useEffect", "nameUpdate", "cleanUp");
  //     console.log({ name, nickname });
  //     return () => {
  //       console.log("cleanUp");
  //       console.log(name);
  //     };
  //   }, [name]);

  // useEffect(() => {
  //   console.log("useEffect", "unmounted", "cleanUp");
  //   console.log({ name, nickname });
  //   return () => {
  //     console.log("cleanUp");
  //     console.log(name);
  //   };
  // }, []);

  // const onChangeName = (e) => {
  //   setName(e.target.value);
  // };

  // const onChangeNickname = (e) => {
  //   setNickname(e.target.value);
  // };

  // const onChangeIpb = (e) => {
  //   dispatch(e.target);
  // };

  return (
    <>
      <div>
        {/* <input type="text" name="name" value={name} onChange={onChangeName} />
        <input
          type="text"
          name="nickname"
          value={nickname}
          onChange={onChangeNickname}
        /> */}
        <input
          type="text"
          name="name"
          value={name}
          // onChange={(e) => dispatch(e.target)}
          onChange={onChange}
        />
        <input
          type="text"
          name="nickname"
          value={nickname}
          // onChange={(e) => dispatch(e.target)}
          onChange={onChange}
        />
      </div>
      <div>
        {/* <div>
          <b>이름: </b>
          {name}
        </div>
        <div>
          <b>별명: </b>
          {nickname}
        </div> */}
        <div>
          <b>이름: </b>
          {name}
        </div>
        <div>
          <b>닉네임: </b>
          {nickname}
        </div>
      </div>
    </>
  );
};

export default Info;
