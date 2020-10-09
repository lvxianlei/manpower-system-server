const Buttons: any = {
    user_info: [
        { name: '编辑', type: 'edit', option: 'id' },
        { name: '删除', type: 'delete', option: 'id' },
        { name: '审请', type: 'approve', option: 'id' }
    ],
    attendance: [{ name: '编辑', type: 'edit', option: 'id' }, { name: '删除', type: 'delete', option: 'id' }],
    achievements: [{ name: '编辑', type: 'auth', option: 'id' }, { name: '删除', type: 'delete', option: 'id' }],
    system_setting: [
        { name: '编辑', type: 'edit', option: 'id' },
        { name: '删除', type: 'delete', option: 'id' },
        { name: '分配权限', type: 'auth', option: 'array' }]
}

export default Buttons