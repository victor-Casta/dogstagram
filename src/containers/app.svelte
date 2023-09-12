<script>
    import Header from '../components/Header.svelte'
    import Main from '../components/Main.svelte'
    import TimeLine from '../components/TimeLine.svelte'
    import Sidebar from '../components/Sidebar.svelte'
</script>


<style>
    :global(body) {
        background-color: #F2EFE9;
        color: #333333;
        font-family: 'Nunito Sans', sans-serif;
        margin: 0;
        padding: 0;
    }

    :global(h1, h2, h3) {
        margin: 0;
        padding: 0;
    }
</style>

<Header />
    <Main>
        <TimeLine />
        <Sidebar/>
    </Main>