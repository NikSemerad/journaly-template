<script lang="ts">
    import Bubble from "$lib/components/Bubble.svelte";
    import profileImage from "$lib/assets/profile-1.png";
    import { constants } from "$lib/assets/constants";
    import OverlayMessage from "$lib/components/OverlayMessage.svelte";
    import {onMount} from "svelte";
    import {animate, spring, stagger} from "motion";

    export let data;

    let isShowingBio = false;

    function showBio() {
        isShowingBio = true;
    }

    function getPosition(index: number, total: number) {
        if (total === 1) return 0;
        if (index === 0) return 1;
        if (index === total - 1) return 3;
        return 2;
    }

    onMount(() => {
        animate(
            ".bubble",
            { opacity: [0, 1], x: [50, 0] },
            { delay: stagger(0.2), duration: 0.4, easing: spring({stiffness: 80}) }
        );
    });

</script>


<div class="flex justify-center md:px-8 px-4">
    <div class="w-full max-w-[656px] pt-12 pb-4">
        <h1 class="font-inter font-[450] text-3xl">{constants.title}</h1>

        <div class="flex-col items-start gap-5 inline-flex my-12">
            <h2 class="font-inter font-[450] text-xl">{constants.subtitle}</h2>
            <div class="text-neutral-500 text-base font-[400] leading-7">{constants.description}</div>
            <div class="flex gap-1">
                <div on:mousedown={showBio} role="button" tabindex="0" class="px-4 py-1.5 rounded-3xl bg-black hover:scale-105 hover:shadow-lg transition-all duration-300">
                    <p class="text-white font-medium font-inter">{constants.button}</p>
                </div>
                <div class="px-4 py-1.5 rounded-3xl bg-white border border-gray-200">
                    <p class="text-gray-400 font-inter">{data.stories.length} stories</p>
                </div>
                <div class="px-4 py-1.5 rounded-3xl bg-white border border-gray-200">
                    <p class="text-gray-400 font-inter">Completed {constants.completed} %</p>
                </div>
            </div>
        </div>


        <div class="pb-12">

            <div on:mousedown={showBio} role="button" tabindex="0" class="sticky w-12 mb-[-48px] top-2 cursor-pointer hover:scale-110 hover:shadow-lg transition-all rounded-full duration-300">
                <img src={profileImage} alt="Avatar" class="w-[48px] h-[48px] rounded-full" />
            </div>

            {#each data.stories as story, index (story.filename)}
                <Bubble date={story.data.date} content={story.content} position={getPosition(index, data.stories.length)} />
            {/each}

            {#if data.stories.length === 0}
                <Bubble date="Today" content="No stories yet 💭" position={0} />
            {/if}

        </div>

        <div class="flex justify-between">
            <p class="text-neutral-400 text-sm font-[400]">© {constants.year}</p>
            <a href="https://journaly.me" class="text-neutral-400 text-sm font-[400]">made by journaly.me</a>
        </div>

    </div>
</div>

<OverlayMessage bind:isShowing={isShowingBio} title={constants.overlayTitle} content={constants.overlayDescription}></OverlayMessage>
