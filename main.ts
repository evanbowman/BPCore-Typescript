import "./bpcore.ts";


print("hello, world!", 1, 1);
print("version: " + _BP_VERSION, 1, 3);

while (true) {
    // main loop, we need to call clear/display at least once for stuff to show
    // up.
    clear();
    display();
}
