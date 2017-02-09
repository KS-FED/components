<template>
  <nav class="k-menu-container fix l">
    <ul class="k-menu" style="overflow-y: scroll">
      <div class="menu-container" v-for="mobj in Menu">
        <li class="k-menu__item title"
            v-text="mobj.name"
        ></li>

        <div class="subMenuContainer" v-for="smobj in mobj.subMenu">
          <li class="k-menu__item trans"
              v-link="{name: smobj.link}" :data-ksa="smobj.ksa"
          >
            <i class="k-menu__icon icon" :class="smobj.icon"></i>
            <span v-text="smobj.name"></span>
          </li>

          <ul class="k-menuSub__container" v-if="smobj.subMenu && smobj.subMenu.length">
            <li class="k-menu__item f12" v-for="ssmobj in smobj.subMenu"
                v-link="{name: ssmobj.link}" :data-ksa="ssmobj.ksa"
                style="padding-left: 40px">
              <i class="k-menu__icon icon" :class="ssmobj.icon"></i>
              <span v-text="ssmobj.name"></span>
            </li>
          </ul>
        </div>


      </div>
    </ul>
  </nav>
</template>

<script lang="babel">
  import Menu from '../../data/menu'

  export default {
    data () {
      return { Menu }
    }
  }
</script>
