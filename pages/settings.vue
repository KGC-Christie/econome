<template>
    <v-theme-provider root>
		<div>
            <v-row>
                <v-col>
                    <v-switch v-model="isDark" label="Dark Theme" hide-details class="mt-0"></v-switch>
                </v-col>
            </v-row>
        </div>
    </v-theme-provider>
</template>

<script>
    export default {
        layout: 'default',
        data() {return {
            isDark: (localStorage.getItem("isDarkTheme")!==null)?localStorage.getItem("isDarkTheme")==='true':false
        }},
        watch: {
            isDark(newValue, oldValue) {
                localStorage.setItem("isDarkTheme",newValue);
                this.$vuetify.theme.dark = newValue;
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>
