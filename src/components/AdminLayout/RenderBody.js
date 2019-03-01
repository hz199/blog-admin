export default {
  name: 'RenderBody',
  functional: true,
  props: {
    row: String
  },
  render: (h, ctx) => {
    const params = ctx.props.row
    return <div>{params}</div>
  }
}

{/* <template>
  <Menu theme="dark" width="auto" :class="menuitemClasses">
    <Submenu name="4">
      <template slot="title">
        <Icon type="ios-navigate"></Icon>
        title
      </template>
      <MenuItem name="4-1">Option 1</MenuItem>
      <MenuItem name="4-2">Option 2</MenuItem>
      <MenuItem name="4-3">Option 3</MenuItem>
    </Submenu>
  </Menu>
</template> */}
