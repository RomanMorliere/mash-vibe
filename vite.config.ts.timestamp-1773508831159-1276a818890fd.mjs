// vite.config.ts
import { defineConfig } from "file:///mnt/c/Users/roman/OneDrive/Desktop/MASH/mash-vibe/node_modules/vite/dist/node/index.js";
import react from "file:///mnt/c/Users/roman/OneDrive/Desktop/MASH/mash-vibe/node_modules/@vitejs/plugin-react-swc/index.js";
import path from "path";
var __vite_injected_original_dirname = "/mnt/c/Users/roman/OneDrive/Desktop/MASH/mash-vibe";
var vite_config_default = defineConfig(async ({ mode }) => {
  const plugins = [react()];
  if (mode === "development") {
    const { componentTagger } = await import("file:///mnt/c/Users/roman/OneDrive/Desktop/MASH/mash-vibe/node_modules/lovable-tagger/dist/index.js");
    plugins.push(componentTagger());
  }
  return {
    server: {
      host: "::",
      port: 8080,
      hmr: {
        overlay: false
      }
    },
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(__vite_injected_original_dirname, "./src")
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvbW50L2MvVXNlcnMvcm9tYW4vT25lRHJpdmUvRGVza3RvcC9NQVNIL21hc2gtdmliZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL21udC9jL1VzZXJzL3JvbWFuL09uZURyaXZlL0Rlc2t0b3AvTUFTSC9tYXNoLXZpYmUvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL21udC9jL1VzZXJzL3JvbWFuL09uZURyaXZlL0Rlc2t0b3AvTUFTSC9tYXNoLXZpYmUvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2NcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoYXN5bmMgKHsgbW9kZSB9KSA9PiB7XG4gIGNvbnN0IHBsdWdpbnMgPSBbcmVhY3QoKV07XG5cbiAgaWYgKG1vZGUgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xuICAgIGNvbnN0IHsgY29tcG9uZW50VGFnZ2VyIH0gPSBhd2FpdCBpbXBvcnQoXCJsb3ZhYmxlLXRhZ2dlclwiKTtcbiAgICBwbHVnaW5zLnB1c2goY29tcG9uZW50VGFnZ2VyKCkpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBzZXJ2ZXI6IHtcbiAgICAgIGhvc3Q6IFwiOjpcIixcbiAgICAgIHBvcnQ6IDgwODAsXG4gICAgICBobXI6IHtcbiAgICAgICAgb3ZlcmxheTogZmFsc2UsXG4gICAgICB9LFxuICAgIH0sXG4gICAgcGx1Z2lucyxcbiAgICByZXNvbHZlOiB7XG4gICAgICBhbGlhczoge1xuICAgICAgICBcIkBcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyY1wiKSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF3VSxTQUFTLG9CQUFvQjtBQUNyVyxPQUFPLFdBQVc7QUFDbEIsT0FBTyxVQUFVO0FBRmpCLElBQU0sbUNBQW1DO0FBS3pDLElBQU8sc0JBQVEsYUFBYSxPQUFPLEVBQUUsS0FBSyxNQUFNO0FBQzlDLFFBQU0sVUFBVSxDQUFDLE1BQU0sQ0FBQztBQUV4QixNQUFJLFNBQVMsZUFBZTtBQUMxQixVQUFNLEVBQUUsZ0JBQWdCLElBQUksTUFBTSxPQUFPLHFHQUFnQjtBQUN6RCxZQUFRLEtBQUssZ0JBQWdCLENBQUM7QUFBQSxFQUNoQztBQUVBLFNBQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLEtBQUs7QUFBQSxRQUNILFNBQVM7QUFBQSxNQUNYO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQLE9BQU87QUFBQSxRQUNMLEtBQUssS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQSxNQUN0QztBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
