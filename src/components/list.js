import { useContext } from "react";
import { Card } from "antd";
import { GlobalContext } from "../context/GlobalState";
import { Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
const { Meta } = Card;

export const List = () => {
  const { employees, removeEmployee } = useContext(GlobalContext);
  console.log("employee", employees);

  return (
    <>
      {employees.map((item, index) => (
        <Card
          style={{
            width: 300,
          }}
          cover={<img alt="example" src={item.corporateLogo} />}
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <Meta
            avatar={<Avatar src={item.corporateLogo} />}
            title="Card title"
            description="This is the description"
          />
        </Card>
      ))}
    </>
  );
};
