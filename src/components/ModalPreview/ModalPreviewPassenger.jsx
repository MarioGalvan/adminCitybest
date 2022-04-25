import { MailOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar, Image, Input, Modal, Row, Space, Typography } from 'antd'
import React from 'react'
import { COLORPRIMARY } from '../../Hooks/constants'
export const ModalPreviewPassenger = ({
    previewModal,
    setvisible,
}) => {
    React.useEffect(() => {
    }, [ previewModal ])

    const inputStyle = {
        width: 300,
    }
    return (
        <Modal footer={null}
            visible={previewModal.visible}
            onCancel={() => setvisible(!previewModal.visible)}>
            <div style={{
                border: `2px solid ${COLORPRIMARY}`,
                margin: 20,
                padding: 20,
                borderRadius: 10,
            }}>
                <Row justify="center">
                    {previewModal?.data?.profilePictureUrl ? <Image
                        style={{
                            borderRadius: 12
                        }}
                        width={200}
                        src={previewModal?.data?.profilePictureUrl ?? <UserOutlined />}
                    /> : <Avatar size={120} icon={<UserOutlined />} />}

                </Row>
                <Row justify="center" style={{
                    marginTop: 20,
                }}>
                    <Space direction='vertical'>
                        <Input style={inputStyle} readOnly value={`${previewModal?.data?.firstName} ${previewModal?.data?.lastName ?? ''}`} size="small" placeholder="large size" prefix={<UserOutlined />} />
                        <Input style={inputStyle} readOnly value={previewModal?.data?.email} size="middle" prefix={<MailOutlined />} />
                        <Input style={inputStyle} readOnly value={previewModal?.data?.phone ?? '00'} size="small" placeholder="large size" prefix={<PhoneOutlined />} />
                    </Space>
                </Row>
            </div>
        </Modal>
    )
}
