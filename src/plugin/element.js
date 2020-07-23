import Vue from "vue"
import {
    Button,
    Form,
    FormItem,
    Input,
    Message,
    Container,
    Header,
    Aside,
    Main,
    Tooltip,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    Menu,
    Submenu,
    MenuItemGroup,
    MenuItem,
    Tabs,
    TabPane,
    Breadcrumb,
    BreadcrumbItem,
    Table,
    TableColumn,
    Row,
    Col,
    Image,
    Card,
    Switch,
    MessageBox ,
        Dialog,
    Pagination,
    Checkbox

} from "element-ui"
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Input)
Vue.use(Tooltip)
Vue.use(Dropdown)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Row)
Vue.use(Col)
Vue.use(Image)
Vue.use(Card)
Vue.use(Switch)
Vue.use(Dialog)
Vue.use(Pagination)
Vue.use(Checkbox)
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.promp