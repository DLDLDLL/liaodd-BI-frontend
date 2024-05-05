import type { ProColumns } from '@ant-design/pro-components';
import { ModalForm, ProForm, ProFormText, ProTable } from '@ant-design/pro-components';
import { tradeQueryUsingPost, payCodeUsingPost } from '@/services/liaodd/aliPayController';
import Modal from 'antd/es/modal/Modal';


import {
    cancelOrderUsingPost,
    deleteOrderUsingPost,
    listMyOrderByPageUsingPost,
    updateOrderUsingPost,
} from '@/services/liaodd/aiFrequencyOrderController';
import { Button, message, Popconfirm, Tag, Image } from 'antd';
import { useState } from 'react';

const Order: React.FC = () => {
    const waitTimePromise = async (time: number = 100) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(true);
            }, time);
        });
    };
    const waitTime = async (time: number = 100) => {
        await waitTimePromise(time);
    };


    const [er, setEr] = useState<string>();
    const [alipayNumber, setAlipayNumber] = useState<string>();
    const [open, setOpen] = useState(false);

    // 定义列对应后端字段
    const columns: ProColumns<API.AiFrequencyOrder>[] = [
        {
            title: '序号',
            dataIndex: 'id',
            valueType: 'indexBorder',
            width: 48,
            align: 'center',
        },
        {
            title: '订单号',
            dataIndex: 'id',
            copyable: true,
            fixed: 'left',
            width: 180,
            align: 'center',
        },
        {
            title: '单价',
            dataIndex: 'price',
            ellipsis: true,
            width: 70,
            align: 'center',
        },
        {
            title: '购买数量',
            dataIndex: 'purchaseQuantity',
            width: 100,
            align: 'center',
        },
        {
            title: '总价格',
            dataIndex: 'totalAmount',
            ellipsis: true,
            width: 70,
            align: 'center',
        },
        {
            title: '订单状态',
            dataIndex: 'orderStatus',
            // 枚举
            valueType: 'select',
            valueEnum: {
                0: { text: <Tag color="warning">待支付</Tag>, status: 'Default' },
                1: { text: <Tag color="success">已支付</Tag>, status: 'Success' },
                2: { text: <Tag color="error">超时订单</Tag>, status: 'Error' },
                3: { text: <Tag color="red">订单已取消</Tag>, status: 'Error' },
            },
            width: 120,
            align: 'center'
        },
        {
            title: '用户ID',
            dataIndex: 'userId',
            copyable: true,
            width: 180,
            align: 'center',
        },
        {
            title: '创建时间',
            dataIndex: 'createTime',
            valueType: 'dateTime',
            width: 150,
            align: 'center',
        },
        {
            title: '付款/取消',
            align: 'center',
            valueType: 'option',
            key: 'pay',
            width: 130,
            render: (text, record) => [
                <>
                    {/* <Link to="/person/pay_order">
                    <Button size={'small'} type={'primary'}>
                        付款
                    </Button>
                </Link> */}
                    {record.orderStatus !== 0 ? (
                        <Button size='small' type="primary" disabled >
                            付款
                        </Button>
                    ) : (
                        <Button size='small' type="primary" onClick={() => orderInfo(record.id)}>
                            付款
                        </Button>
                    )}
                    <a key="view">
                        <Popconfirm
                            title="取消订单"
                            description="你确定要取消此订单吗？"
                            onConfirm={async () => {
                                console.log('record', record);
                                const isCancel = await cancelOrderUsingPost({ ...record });
                                if (isCancel) {
                                    message.success('取消成功');
                                    // 刷新订单信息表单
                                    location.reload();
                                } else {
                                    message.error('取消失败');
                                }
                            }}
                            onCancel={() => { }}
                            okText="是"
                            cancelText="否"
                        >
                            {/* <Button size={'small'}>取消</Button> */}
                            {record.orderStatus !== 0 ? (
                                <Button size='small' type="primary" disabled>
                                    取消
                                </Button>
                            ) : (
                                <Button size='small' type="primary">
                                    取消
                                </Button>
                            )}
                        </Popconfirm>
                    </a>
                </>,
            ],
        },
        {
            title: '操作',
            align: 'center',
            width: 130,
            valueType: 'option',
            key: 'option',
            render: (text, record) => [
                <>
                    <ModalForm<API.AiFrequencyOrderQueryRequest>
                        title="修改订单信息"
                        trigger={
                            // <Button type="dashed" size={'small'} style={{ color: 'blue' }}>
                            //     修改
                            // </Button>
                            record.orderStatus !== 0 ? (
                                <Button size='small' type="dashed" disabled>
                                    修改
                                </Button>
                            ) : (
                                <Button size='small' type="primary">
                                    修改
                                </Button>
                            )
                        }
                        autoFocusFirstInput
                        modalProps={{
                            destroyOnClose: true,
                            onCancel: () => console.log('run'),
                        }}
                        submitTimeout={2000}
                        onFinish={async (values) => {
                            //点击了提交，发起请求
                            console.log('values', values);
                            values.id = record.id;
                            const updateOrder = await updateOrderUsingPost(values);
                            if (updateOrder.code === 0) {
                                message.success('修改订单成功');
                                // 刷新界面
                                location.reload();
                            } else {
                                message.error('修改订单失败');
                            }
                        }}
                    >
                        <ProForm.Group>
                            <ProFormText
                                width="md"
                                name="purchaseQuantity"
                                label="请输入你想购买AI使用次数"
                                placeholder="请输入购买数量"
                                initialValue={record.purchaseQuantity}
                            />
                        </ProForm.Group>
                    </ModalForm>
                    <a key="view">
                        <Popconfirm
                            title="删除订单"
                            description="你确定要删除此订单吗？"
                            onConfirm={async () => {
                                const id = record.id;
                                const isDelete = await deleteOrderUsingPost({ id: id });
                                if (isDelete) {
                                    message.success('删除成功');
                                    // 刷新订单信息表单
                                    location.reload();
                                } else {
                                    message.error('删除失败');
                                }
                            }}
                            onCancel={() => { }}
                            okText="是"
                            cancelText="否"
                        >
                            <Button size={'small'} type={'primary'} danger>
                                删除
                            </Button>
                        </Popconfirm>
                    </a>
                </>,
            ],
        },
    ];

    const [orderTotal, setOrderTotal] = useState<number>(0);
    const [orderList, setOrderList] = useState<API.AiFrequencyOrderVO[]>();
    /**
     * 初始值
     */
    const initSearchParams = {
        current: 1,
        pageSize: 10,
        sortField: 'createTime',
        sortOrder: 'desc',
    };

    /**
     * 获取订单列表
     * @param id
     */
    const orderInfo = async (id: string) => {
        setOpen(true);
        // @ts-ignore
        const res = await payCodeUsingPost({ orderId: id });
        console.log('订单流水号信息：', res.data?.alipayAccountNo);
        setEr(res?.data?.qrCode);
        // 获取查询查询的流水号
        setAlipayNumber(res.data?.alipayAccountNo);
    };

    /**
     * 查询参数
     */
    const [searchParams, setSearchParams] = useState<API.AiFrequencyOrderQueryRequest>({
        ...initSearchParams,
    });
    const [confirmLoading, setConfirmLoading] = useState(false);

    const handleOk = () => {
        // // 传递alipayNumber作为参数
        // // @ts-ignore
        // okAndSearch(alipayNumber);
        // message.success('已成功支付');
        // setConfirmLoading(true);
        // setTimeout(() => {
        //     setOpen(false);
        //     setConfirmLoading(false);
        // }, 1000);
        // location.reload();
        // loaData();

        location.reload();
        setOpen(false);
    };

    const handleCancel = () => {
        console.log('取消支付');
        // location.reload();
        setOpen(false);
    };

    return (
        <>
            <div className="my-order" style={{ margin: '50px' }}>
                <ProTable<API.AiFrequencyOrderQueryRequest>
                    headerTitle="下单列表"
                    columns={columns}
                    scroll={{ x: '100%' }}
                    // 隐藏查询区域
                    // search={false}
                    // 获取后端的数据，返回到表格
                    // @ts-ignore
                    request={async (params = {}, sort, filter) => {
                        // console.log(sort, filter);
                        await waitTime(500);
                        const orderList = await listMyOrderByPageUsingPost(params);
                        console.log('orderlist', orderList?.data?.records);
                        if (orderList.code === 0) {
                            setOrderList(orderList?.data?.records ?? []);
                            setOrderTotal(orderList?.data?.total ?? 0);
                        } else {
                            message.error('获取订单列表失败');
                        }
                        // @ts-ignore
                        return { data: orderList.data.records };
                    }}

                    pagination={{
                        // 设置分页
                        showTotal: () => `共 ${orderTotal} 条记录`,
                        showSizeChanger: true,
                        showQuickJumper: true,
                        pageSizeOptions: ['10', '20', '30'],
                        onChange: (page, pageSize) => {
                            setSearchParams({
                                ...searchParams,
                                current: page,
                                pageSize,
                            });
                        },
                        current: searchParams.current,
                        pageSize: searchParams.pageSize,
                        total: orderTotal,
                        position: ['bottomCenter'],
                    }}
                />
                <Modal
                    title="请使用支付宝扫码付款"
                    open={open}
                    onOk={handleOk}
                    confirmLoading={confirmLoading}
                    onCancel={handleCancel}
                >
                    <Image width={200} src={er}></Image>
                </Modal>
            </div>
        </>
    );
};
export default Order;