<template>
    <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar">
        <nav class="uk-navbar-container" uk-navbar style="position: relative; z-index: 980;">
            <div class="uk-navbar-right">
                <ul class="uk-navbar-nav">
                    <li><router-link to="/">Home</router-link></li>
                    <li><router-link to="/gridexample">Grid-Example</router-link></li>
                    <li><router-link to="/kanbanExample/12">Kanban-Example</router-link></li>
                    <li><router-link to="/storyBoardExample/19">StoryBoard-Example</router-link></li>
                    <li><router-link to="/login">Login</router-link></li>
                    <li><router-link to="/register">Register</router-link></li>
                    <li><router-link to="/user/7">User</router-link></li>
                    <li><router-link to="/project/5">Project</router-link></li>
                    <li><router-link to="/settings">Settings</router-link></li>
                </ul>
            </div>
        </nav>
    </div>
</template>
