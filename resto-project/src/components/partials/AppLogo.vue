<template>

    <img alt="Restaurant logo" :width="LogoWidth" :height="LogoHeight" src="../../assets/logo2.png">
</template>

<script>
export default {
    name: 'AppLogo',
    // props: ['LogoWidth', 'LogoHeight'],
    props: {
        LogoWidth : {
            default:200
        },
        LogoHeight :{
            default:200
        }
    },
    data() {
        return {
            width: 200,
            height: 200,

        }
    }

}
</script>