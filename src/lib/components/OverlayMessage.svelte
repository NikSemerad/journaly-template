<script lang="ts">
    import {animate, spring} from "motion";
    import {blur} from "svelte/transition";

    export let isShowing: boolean;
    export let title: string;
    export let content: string;

    function close() {
        isShowing = false;
    }

    function showCard(node: HTMLElement) {
        animate(
            node,
            { opacity: [0,1], top: [25, 0], scale: [0.95, 1]},
            { delay: 0, easing: spring({ stiffness: 100 })}
        );
        return {
            duration: 0,
        };
    }

</script>


{#if isShowing}
    <div transition:blur={{ duration: 200 }} on:mousedown={close} role="button" tabindex="0" class="fixed flex w-full h-full top-0 bottom-0 right-0 left-0 z-10 p-4 bg-black bg-opacity-30 justify-center items-center backdrop-blur-sm cursor-pointer">
        <div in:showCard class="px-8 py-6 bg-white relative rounded-3xl max-w-[420px] lg:min-w-[420px] cursor-auto">
            <h3 class="font-inter font-[450] text-xl mb-2">{title}</h3>
            <p class="text-neutral-500 font-[400] leading-7">{content}</p>
        </div>
    </div>
{/if}