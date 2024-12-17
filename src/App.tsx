// import Button from "./components/Button";
// import { ButtonType, ButtonSize } from "./components/Button/types";
// import Alert from "@/components/Alert";
import Menu from "./components/Menu/Menu";
import MenuItem from "./components/MenuItem/MenuItem";

function App() {
  return (
    <>
      <Menu defaultIndex={1}>
        <MenuItem index={0}>苹果</MenuItem>
        <MenuItem index={1}>香蕉</MenuItem>
        <MenuItem index={2}>葡萄</MenuItem>
      </Menu>
    </>
  );

  // return (
  //   <>
  //   <Button btnType={ButtonType.Primary} disabled >Hellow Word</Button>
  //   <Button >Hellow Word</Button>
  //   <Button btnType={ButtonType.Primary} size={ButtonSize.Large} onClick={() => {
  //     console.log('123123')
  //   }}>Hellow Word</Button>
  //   <Button btnType={ButtonType.Primary} size={ButtonSize.Small} className="test-btn">Hellow Word 123</Button>
  //   <Button btnType={ButtonType.Default}>Hellow Word</Button>
  //   <Button btnType={ButtonType.Default} disabled>Hellow Word</Button>

  //   <Button btnType={ButtonType.Danger}>Hellow Word</Button>
  //   <Button btnType={ButtonType.Link} href='https://www.baidu.com' target="_blank" className="test-a">Hellow Word</Button>
  //   <Button btnType={ButtonType.Link} disabled>Hellow Word</Button>
  //   </>
  // )

  // return (
  //   <div style={{padding: 20}}>
  //     <Alert
  //       showIcon
  //       closable
  //       title="This is a alert!"
  //       content="This is a alert!"
  //     />
  //     <Alert
  //       showIcon
  //       closable
  //       type="success"
  //       title="This is a alert!"
  //       content="This is a alert!"
  //     />
  //     <Alert
  //       showIcon
  //       closable
  //       type="error"
  //       title="This is a alert!"
  //       content="This is a alert!"
  //     />
  //     <Alert
  //       showIcon
  //       closable
  //       type="info"
  //       title="This is a alert!"
  //       content="This is a alert!"
  //     />
  //     <Alert
  //       showIcon
  //       closable
  //       type="warning"
  //       title="This is a alert!"
  //       content="This is a alert!"
  //     />
  //   </div>
  // );
}

export default App;