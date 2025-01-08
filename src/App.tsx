// import Button from "./components/Button";
// import { ButtonType, ButtonSize } from "./components/Button/types";
// import Alert from "@/components/Alert";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Menu from "./components/Menu/Menu";
import MenuItem from "./components/MenuItem/MenuItem";
import SubMenu from "./components/SubMenu/SubMenu";
import Icon from "./components/Icon/Icon";

// 注册图标
library.add(fas);

function App() {
  return (
    <>
      {/* <Icon icon='arrow-down' size="10x" className="test" theme="danger" /> */}
      <Menu defaultIndex={'1'} trigger="hover">
        <MenuItem disabled>苹果</MenuItem>
        <MenuItem>香蕉</MenuItem>
        <MenuItem>葡萄</MenuItem>
        <SubMenu title="测试" className="test">
          <MenuItem>香蕉</MenuItem>
          <MenuItem>葡萄</MenuItem>
        </SubMenu>
      </Menu>
      {/* <Menu defaultIndex={1} mode={'vertical'}>
        <MenuItem disabled>苹果</MenuItem>
        <MenuItem>香蕉</MenuItem>
        <MenuItem>葡萄</MenuItem>
      </Menu> */}
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
