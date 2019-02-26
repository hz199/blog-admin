<template>
  <Menu theme="dark" width="auto" :class="menuitemClasses">
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
      default: () => []
    }
  }
}
</script>

