
<script>
import Menu from './menu'

export default {
  name: 'subMenu',
  props: {
    menuitemClasses: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      menuInfo: Menu 
    }
  },
  methods: {
    selectMenuName (path) {
      console.log(path, 1111)
    }
  },
  render () {
    const { menuitemClasses, menuInfo } = this
    const that = this
    return (
      <i-Menu theme="dark" width="auto" class={menuitemClasses}>
        {
          menuInfo.map((item, index) => {
            if (item.subMenu) {
              return (
                <Submenu key={index} name={index}>
                  <template slot="title">
                    <Icon type="ios-navigate"></Icon>
                    {item.title}
                  </template>
                  {
                    item.subMenu.map((subItem, subIndex) => {
                      return <MenuItem nativeOnClick={() => {
                        that.selectMenuName(subItem.path)
                      }} key={`sub-${subIndex}`} name={`${index}-${subIndex}`}>
                        <Icon type="ios-navigate"></Icon>
                        {subItem.title}
                      </MenuItem>
                    })
                  }
                </Submenu>
              )
            } else {
              return (
                <MenuItem nativeOnClick={() => {
                    that.selectMenuName(item.path)
                  }} key={index} name={index}>
                  <Icon type="ios-navigate"></Icon>
                  {item.title}
                </MenuItem>
              )
            }
          })
        }
      </i-Menu>
    )
  }
}
</script>

