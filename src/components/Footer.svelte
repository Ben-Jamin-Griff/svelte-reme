<script>

</script>

<style>
	nav {
		font-weight: 300;
		padding: 0 1em;
	}

	ul {
		margin: 0;
		padding: 0;
        float: right;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	.selected {
		position: relative;
		display: inline-block;
	}

	.selected::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		display: block;
	}

	.link {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}

    .nav-container {
            height: 56px;
    }

</style>

<div class="nav-container">
        <nav>
        	<ul>
	        	<li><a class='link selected' href='about'>about</a></li>
        		<li><a class='link selected' href='projects'>projects</a></li>
        	</ul>
        </nav>
</div>
