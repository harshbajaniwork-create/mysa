"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Filter,
  ArrowDownWideNarrow,
  ArrowUpWideNarrow,
  Stars,
} from "lucide-react";

interface FilterBarProps {
  sortBy: "price-low" | "price-high" | "rating";
  setSortBy: (val: "price-low" | "price-high" | "rating") => void;
}

const FilterBar = ({ sortBy, setSortBy }: FilterBarProps) => {
  const filters = [
    { id: "price-low", label: "Price: Low to High", icon: ArrowDownWideNarrow },
    { id: "price-high", label: "Price: High to Low", icon: ArrowUpWideNarrow },
    { id: "rating", label: "Top Rated", icon: Stars },
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16 px-4">
      <div className="flex items-center gap-3">
        <div className="p-3 bg-primary text-white rounded-2xl shadow-lg">
          <Filter size={20} />
        </div>
        <div>
          <h2 className="text-xl font-bold text-primary">Filter Our Stays</h2>
          <p className="text-xs text-muted-foreground font-medium uppercase tracking-widest">
            Find your perfect mountain retreat
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3 bg-white p-2 rounded-3xl border border-border/50 shadow-sm">
        {filters.map((filter) => {
          const Icon = filter.icon;
          const isActive = sortBy === filter.id;

          return (
            <motion.button
              key={filter.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSortBy(filter.id as any)}
              className={`flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-bold transition-all duration-300 ${
                isActive
                  ? "bg-secondary text-white shadow-md shadow-secondary/20"
                  : "text-primary hover:bg-primary/5"
              }`}
            >
              <Icon size={18} />
              {filter.label}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default FilterBar;
