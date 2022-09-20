<script>
export default function auth({ next, router }) {
    if (!llocalStorage.getItem('user_info')) {
        return router.push({ name: 'login' });
    }

    return next();
}
</script>