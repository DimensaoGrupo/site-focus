import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // O padrão do Next 16 é 4 h. Com 60 s, uma foto trocada em /public/fotos
    // com o mesmo nome aparece logo, sem precisar limpar o cache à mão.
    minimumCacheTTL: 60,
  },
};

export default nextConfig;
