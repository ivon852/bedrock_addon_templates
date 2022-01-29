import { world } from 'mojang-minecraft';
world.events.tick.subscribe((eventData) => {
    world.getDimension("overworld").runCommand("say Hello World!");
});