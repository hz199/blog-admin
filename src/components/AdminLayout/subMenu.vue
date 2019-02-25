<template>
  <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses">
    <MenuItem name="1-1">
      <Icon type="ios-navigate"></Icon>
      <span>Option 1</span>
    </MenuItem>
    <MenuItem name="1-2">
      <Icon type="ios-navigate"></Icon>
      <span>Option 2</span>
    </MenuItem>
    <MenuItem name="1-3">
      <Icon type="ios-navigate"></Icon>
      <span>Option 3</span>
    </MenuItem>
    <Submenu name="4">
      <template slot="title">
          <Icon type="ios-navigate"></Icon>
          Item 1
      </template>
      <MenuItem name="4-1">Option 1</MenuItem>
      <MenuItem name="4-2">Option 2</MenuItem>
      <MenuItem name="4-3">Option 3</MenuItem>
    </Submenu>
  </Menu>
</template>
<script>
export default {
  name: 'subMenu',
  props: {
    menuitemClasses: {
      type: Array,
      default: []
    }
  }
}
</script>

