import React from "react";
import { Card, Row, Col, Button, Skeleton } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
const { Meta } = Card;

const skeleton = [{}, {}, {}, {}, {}, {}, {}, {}];
function CardProduct({ data, loading }) {
  return (
    <Row>
      {loading === true
        ? skeleton.map((data, index1) => {
            return (
              <Col xs={24} sm={24} md={8} lg={6} style={{ margin: 20 }}>
                <Skeleton>
                  <Card
                    key={index1}
                    hoverable
                    style={{ width: 240 }}
                    cover={
                      <img
                        alt="example"
                        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                      />
                    }
                  >
                    <Meta title={data.name} description="www.instagram.com" />
                    <Button
                      type="primary"
                      shape="circle"
                      icon={<ShoppingCartOutlined />}
                      size="large"
                    />
                  </Card>
                </Skeleton>
              </Col>
            );
          })
        : data.map((data, index1) => {
            return (
              <Col xs={24} sm={24} md={8} lg={6}>
                <Card
                  key={index1}
                  hoverable
                  style={{ width: 240 }}
                  cover={
                    <img
                      alt="example"
                      src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    />
                  }
                >
                  <Meta title={data.name} description="www.instagram.com" />
                  <Button
                    type="primary"
                    shape="circle"
                    icon={<ShoppingCartOutlined />}
                    size="large"
                  />
                </Card>
              </Col>
            );
          })}
    </Row>
  );
}

export default CardProduct;
